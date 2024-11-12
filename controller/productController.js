const { prisma } = require("../db/config");

const createProduct = async (req, res) => {
    const { name, stock, price } = req.body;
    try {
        const product = await prisma.product.create({
            data: { name, stock, price },
        });
        res.status(201).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create product' });
    }
}

const getProduct = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve product' });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, stock, price } = req.body;
    try {
        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: { name, stock, price },
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
}

const partiallyUpdateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data,
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to partially update product' });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
}

module.exports = { createProduct, getProduct, getById, updateProduct, partiallyUpdateProduct, deleteProduct };