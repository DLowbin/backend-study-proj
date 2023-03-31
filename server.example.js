const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    const content = await fs.readFile(path.join(basePath, "index.html"));
    res.end(content);
  } else if (req.method === "POST") {
    res.end("Post success");
  }
});
