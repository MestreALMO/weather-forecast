import axios from "axios";

export async function GET(request: Request) {
  try {
    const response = await axios.get(
      "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-br"
    );

    // Verify if answer data is present and first image
    if (
      response.data &&
      response.data.images &&
      response.data.images.length > 0
    ) {
      const imageData = response.data.images[0];

      // Extract desired info
      const imageUrl = `https://www.bing.com${imageData.url}`;
      const imageTitle = `https://www.bing.com${imageData.url}`;
      // const imageTitle = imageData.title;

      // Return data as JSON
      return Response.json({ imageUrl, imageTitle });
    } else {
      // returns error if desired data isn't present
      return Response.json({
        error: "Image background not found.",
      });
    }
  } catch (error) {
    // Error displayed in case of a problem during data solicitation
    return Response.json({ error: "Error obtening background image." });
  }
}
