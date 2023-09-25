const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000) // Perbaikan: memindahkan tanda kurung ke kanan dari `3000` ke dalam setTimeout
    })
}

cekHariKerja('senin')
    .then((result) => {
        console.log(`Hari ${result} adalah hari kerja. `)
    })
    .catch((error) => {
        console.error(error.message)
    })
