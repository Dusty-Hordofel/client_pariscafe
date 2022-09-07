exports.fetchAllCategories = async (req, res) => {
  try {
    res.status(200).json({ message: 'Hello World' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
