export default (req, res) => {
  const { name = "World" } = req.query;
  res.status(200).send(`Should deploy only 1 app ${name}!`);
};
