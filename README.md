# mongodb-crud

mongodb-crud merupakan aplikasi untuk menyimpan data collection books ke dalam database mongo db

# List Route
Route | HTTP | Description
--- | --- | ---
/api/books | GET | Mendapatkan data semua buku
/api/books | POST | Menambah data buku
/api/books/:id | PUT | Mengubah data buku
/api/books/:id | DELETE | Menghapus data buku

# Usage
1. Install package depedency

    npm install

2. Pastikan database di mongo db memiliki database library

    use library

3. Jalankan aplikasi dengan menggunakan nodemon

    npm start

    Jika belum terinstall nodemon, di package.json,
    ubah

    "start": "nodemon ./bin/www"

    menjadi

    "start": "node ./bin/www"

    lalu jalankan menggunakan perintah

    npm start
