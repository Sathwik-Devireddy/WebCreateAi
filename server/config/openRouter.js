const openRouterUrl =
  "https://openrouter.ai/api/v1/chat/completions";

const model = "qwen/qwen-2.5-coder-32b-instruct";

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
You are an expert frontend developer.

Generate highly creative modern websites using:
- HTML
- CSS
- vanilla JavaScript

Requirements:
- return ONLY pure valid JSON
- no markdown
- no triple backticks
- single-file HTML
- GSAP animations
- premium UI
- responsive layout
- modern effects
- cinematic sections
`,
        },

        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.3,

      max_tokens: 4000,
    }),
  });

  const data = await res.json();

  console.log(JSON.stringify(data, null, 2));

  if (!res.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data.choices[0].message.content;
};
