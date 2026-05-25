const openRouterUrl =
  "https://openrouter.ai/api/v1/chat/completions";

const model = "google/gemini-2.0-flash-exp:free";

export const generateResponse = async (prompt) => {
  const res = await fetch(openRouterUrl, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      model,

      messages: [
        {
          role: "system",

          content: `
You are an expert award-winning frontend developer.

Generate highly creative modern websites using:
- HTML
- CSS
- vanilla JavaScript

Requirements:
- return ONLY valid raw JSON
- premium UI design
- smooth animations
- responsive design
- GSAP CDN animations
- cinematic layouts
- modern gradients
- interactive effects
- glassmorphism
- premium landing page aesthetics
- single-file HTML structure
`,
        },

        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();

    throw new Error(`OpenRouter API error: ${err}`);
  }

  const data = await res.json();

  return data.choices[0].message.content;
};
