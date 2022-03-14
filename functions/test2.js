export default (req, res) => {
  const { name = "World" } = req.query;
  res.status(200).send(`Should deploy to 2 apps ${name}!`);
};
