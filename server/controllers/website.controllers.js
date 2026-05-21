import { generateResponse } from "../config/openRouter.js";
import extractJson from "../utils/extractJson.js";
import Website from "../models/wesite.model.js";
import User from "../models/user.model.js";
const masterPrompt = `YOU ARE A PRINCIPAL FRONTEND DEVELOPER. YOU ARE AN EXPERT IN HTML, CSS, JAVASCRIPT AND REACT. YOU HAVE BEEN WORKING AS A FRONTEND DEVELOPER FOR 10 YEARS. YOU HAVE WORKED ON MANY PROJECTS AND HAVE A LOT OF EXPERIENCE IN THE FIELD. YOU ARE VERY GOOD AT UNDERSTANDING REQUIREMENTS AND DELIVERING HIGH QUALITY CODE. YOU ARE VERY GOOD AT WRITING CLEAN AND MAINTAINABLE CODE. YOU ARE VERY GOOD AT OPTIMIZING CODE FOR PERFORMANCE AND SEO. YOU ARE VERY GOOD AT WRITING TESTS FOR YOUR CODE.
  TASK IS TO GENERATE A FULLY FUNCTIONAL WEBSITE BASED ON THE USER'S PROMPT. THE USER WILL 
  PROVIDE A PROMPT DESCRIBING THE WEBSITE THEY WANT TO CREATE, AND YOU WILL GENERATE THE 
  NECESSARY CODE TO BUILD THAT WEBSITE. THE GENERATED CODE SHOULD BE WELL-STRUCTURED, CLEAN, 
  AND FOLLOW BEST PRACTICES IN WEB DEVELOPMENT. MAKE SURE TO INCLUDE ALL NECESSARY FILES SUCH 
  AS HTML, CSS, JAVASCRIPT, AND ANY OTHER ASSETS REQUIRED FOR THE WEBSITE TO FUNCTION PROPERLY. 
  THE GENERATED WEBSITE SHOULD BE RESPONSIVE AND WORK WELL ON DIFFERENT DEVICES AND SCREEN SIZES. 
  ALWAYS AIM TO DELIVER HIGH-QUALITY CODE THAT IS EASY TO MAINTAIN AND EXTEND IN THE FUTURE.THE OUTPUT MUST BE CLIENT-DELIVERABLE WITHOUT ANY MODIFICATIONS 
  GLOBAL QUALITY BAR (NON-NEGOTIABLE)
--------------------------------------------------
- Premium, modern UI (2026–2027)
- Professional typography & spacing
- Clean visual hierarchy
- Business-ready content (NO lorem ipsum)
- Smooth transitions & hover effects
- SPA-style multi-page experience
- Production-ready, readable code
-make this website futuristic/cinematic/apple-styled
--------------------------------------------------
RESPONSIVE DESIGN (ABSOLUTE REQUIREMENT)
--------------------------------------------------
THIS WEBSITE MUST BE FULLY RESPONSIVE.

YOU MUST IMPLEMENT:

✔ Mobile-first CSS approach
✔ Responsive layout for:
  - Mobile (<768px)
  - Tablet (768px–1024px)
  - Desktop (>1024px)

✔ Use:
  - CSS Grid / Flexbox
  - Relative units (%, rem, vw)
  - Media queries

✔ REQUIRED RESPONSIVE BEHAVIOR:
  - Navbar collapses / stacks on mobile
  - Sections stack vertically on mobile
  - Multi-column layouts become single-column on small screens
  - Images scale proportionally
  - Text remains readable on all devices
  - No horizontal scrolling on mobile
  - Touch-friendly buttons on mobile

IF THE WEBSITE IS NOT RESPONSIVE → RESPONSE IS INVALID.

--------------------------------------------------
IMAGES (MANDATORY & RESPONSIVE)
--------------------------------------------------
- Use high-quality images ONLY from:
  https://images.unsplash.com/
- EVERY image URL MUST include:
  ?auto=format&fit=crop&w=1200&q=80

- Images must:
  - Be responsive (max-width: 100%)
  - Resize correctly on mobile
  - Never overflow containers

--------------------------------------------------
TECHNICAL RULES (VERY IMPORTANT)
--------------------------------------------------
- Output ONE single HTML file
- Exactly ONE <style> tag
- Exactly ONE <script> tag
- NO external CSS / JS / fonts
- Use system fonts only
- iframe srcdoc compatible
- SPA-style navigation using JavaScript
- No page reloads
- No dead UI
- No broken buttons
--------------------------------------------------
SPA VISIBILITY RULE (MANDATORY)
--------------------------------------------------
- Pages MUST NOT be hidden permanently
- If .page { display: none } is used,
  then .page.active { display: block } is REQUIRED
- At least ONE page MUST be visible on initial load
- Hiding all content is INVALID


--------------------------------------------------
REQUIRED SPA PAGES
--------------------------------------------------
- Home
- About
- Services / Features
- Contact

--------------------------------------------------
FUNCTIONAL REQUIREMENTS
--------------------------------------------------
- Navigation must switch pages using JS
- Active nav state must update
- Forms must have JS validation
- Buttons must show hover + active states
- Smooth section/page transitions

--------------------------------------------------
FINAL SELF-CHECK (MANDATORY)
--------------------------------------------------
BEFORE RESPONDING, ENSURE:

1. Layout works on mobile, tablet, desktop
2. No horizontal scroll on mobile
3. All images are responsive
4. All sections adapt properly
5. Media queries are present and used
6. Navigation works on all screen sizes
7. At least ONE page is visible without user interaction

IF ANY CHECK FAILS → RESPONSE IS INVALID

--------------------------------------------------
OUTPUT FORMAT (RAW JSON ONLY)
--------------------------------------------------
{
  "message": "Short professional confirmation sentence",
  "code": "<FULL VALID HTML DOCUMENT>"
}
--------------------------------------------------
USER REQUIREMENT
--------------------------------------------------

USER_PROMPT
--------------------------------------------------
ABSOLUTE RULES
--------------------------------------------------
- RETURN RAW JSON ONLY
- NO markdown
- NO explanations
- NO extra text
- FORMAT MUST MATCH EXACTLY
- IF FORMAT IS BROKEN → RESPONSE IS INVALID
`;
export const generateWebsite = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    if (user.credits < 50) {
      return res.status(403).json({
        message: "Not enough credits",
      });
    }

    const finalPrompt = masterPrompt.replace("USER_PROMPT", prompt);
    let raw = "";
    let parsed = null;
    for (let i = 0; i < 2 && !parsed; i++) {
      raw = await generateResponse(finalPrompt); // Generate the response using the final prompt
      parsed = await extractJson(raw);
      if (!parsed) {
        raw = await generateResponse(finalPrompt + "\n\nRETURN ONLY RAW JSON.");
        parsed = await extractJson(raw);
      }
    }
    if (!parsed.code) {
      return res.status(500).json({
        message: "Failed to generate a valid response after multiple attempts",
      });
    }
    const website = await Website.create({
      user: user._id,

      title: prompt.slice(0, 60),

      slug:
        prompt
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .slice(0, 50) +
        "-" +
        Date.now(),

      latestCode: parsed.code,

      conversation: [
        {
          role: "ai",
          content: parsed.message,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    user.credits -= 50;
    await user.save();
    return res.status(200).json({
      message: "Website generated successfully",
      websiteId: website._id,
      remainingCredites: user.credits,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getWebsiteById = async (req, res) => {
  try {
    const website = await Website.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!website) {
      return res.status(404).json({
        message: "Website not found",
      });
    }
    return res.status(200).json(website);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Get Website By Id Error",
    });
  }
};
export const changes = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }
    const website = await Website.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!website) {
      return res.status(404).json({
        message: "Website not found",
      });
    }
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    if (user.credits < 15) {
      return res.status(403).json({
        message: "Not enough credits",
      });
    }

    const updatePrompt = `UPDATE THIS WEBSITE.
    CURRENT CODE: ${website.latestCode}
    USER REQUEST: ${prompt}
    RETURN RAW JSON ONLY :
    {
    "message":"short confirmation message",
    "code":"the full updated code of the website after making the changes requested by the user. Make sure the code is complete and can be used as is to update the website."
    }`;
    let raw = "";
    let parsed = null;
    for (let i = 0; i < 2 && !parsed; i++) {
      raw = await generateResponse(updatePrompt); // Generate the response using the final prompt
      parsed = await extractJson(raw);
      if (!parsed) {
        raw = await generateResponse(
          updatePrompt + "\n\nRETURN ONLY RAW JSON.",
        );
        parsed = await extractJson(raw);
      }
    }
    if (!parsed.code) {
      return res.status(500).json({
        message: "Failed to generate a valid response after multiple attempts",
      });
    }
    website.conversation.push(
      {
        role: "ai",
        content: parsed.message,
      },
      {
        role: "user",
        content: prompt,
      },
    );
    website.latestCode = parsed.code;
    await website.save();
    user.credits -= 15;
    await user.save();
    return res.status(200).json({
      message: parsed.message,
      code: parsed.code,
      remainingCredites: user.credits,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update Website Error",
    });
  }
};
export const getAllWebsites = async (req, res) => {
  try {
    const websites = await Website.find({ user: req.user._id });
    return res.status(200).json(websites);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Get All Websites Error",
    });
  }
};
