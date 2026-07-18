require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT;

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get('/api/peserta', async (req, res) => {
    const { nama, noHp } = req.query;

    if (!nama && !noHp) {
        return res.status(400).json({ message: 'Masukkan nama atau nomor HP' });
    }

    try {
        const [rows] = await db.execute(
            'SELECT nama, no_hp AS noHp, posisi, email, status FROM peserta WHERE LOWER(nama) = LOWER(?) OR no_hp = ?',
            [nama || '', noHp || '']
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
