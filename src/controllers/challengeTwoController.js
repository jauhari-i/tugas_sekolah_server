module.exports = controller = {
  balok: (req, res) => {
    const panjang = req.body.panjang;
    const lebar = req.body.lebar;
    const tinggi = req.body.tinggi;

    let volume = panjang * lebar * tinggi;
    let luasP = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

    res.status(200).json({
      balok: {
        p: panjang,
        l: lebar,
        t: tinggi,
      },
      volume: volume,
      luasPermukaan: luasP,
    });
  },
  kubus: (req, res) => {
    const sisi = req.body.sisi;

    let volume = sisi * sisi * sisi;
    let luasP = 6 * (sisi * sisi);

    res.status(200).json({
      kubus: {
        s: sisi,
      },
      volume: volume,
      luasPermukaan: luasP,
    });
  },
  bola: (req, res) => {
    const jari = req.body.jari_jari;

    let volume = (4 / 3) * 3.14 * (jari * jari * jari);
    let luasP = 4 * 3.14 * (jari * jari);

    res.status(200).json({
      bola: {
        jari_jari: jari,
      },
      volume: volume,
      luasPermukaan: luasP,
    });
  },
  kerucut: (req, res) => {
    const tinggi = req.body.tinggi;
    const jari = req.body.jari_jari;

    let volume = (1 / 3) * 3.14 * (jari * jari) * tinggi;
    let s = Math.sqrt(jari * jari + tinggi * tinggi);
    let luasP = 3.14 * jari * (jari + s);

    res.status(200).json({
      kerucut: {
        jari_jari: jari,
        tinggi: tinggi,
      },
      volume: volume,
      luasPermukaan: luasP,
    });
  },
  celcius: (req, res) => {
    const heat = Number(req.params.heat);
    const r = (4 / 5) * heat;
    const k = heat + 273;
    const f = (9 / 5) * heat + 32;

    res.status(200).json({
      celcius: heat,
      konversi: {
        reamur: r,
        kelvin: k,
        fahrenheit: f,
      },
    });
  },
  reamur: (req, res) => {
    const heat = Number(req.params.heat);
    const c = (5 / 4) * heat;
    const k = (5 / 4) * heat + 273;
    const f = (9 / 4) * heat + 32;

    res.status(200).json({
      reamur: heat,
      konversi: {
        celcius: c,
        kelvin: k,
        fahrenheit: f,
      },
    });
  },
  kelvin: (req, res) => {
    const heat = Number(req.params.heat);

    res.status(200).json({
      kelvin: heat,
      konversi: {
        celcius: heat - 273,
        reamur: (4 / 5) * (heat - 273),
        fahrenheit: (9 / 5) * (heat - 273) + 32,
      },
    });
  },
  fahrenheit: (req, res) => {
    const heat = Number(req.params.heat);

    res.status(200).json({
      fahrenheit: heat,
      konversi: {
        celcius: (5 / 9) * (heat - 32),
        reamur: (4 / 9) * (heat - 32),
        kelvin: (5 / 9) * (heat - 32) + 273,
      },
    });
  },
  decimal: (req, res) => {
    let number = req.params.number;
    res.status(200).json({
      decimal: Number(number),
      konversi: {
        biner: Number((+number).toString(2)),
        octal: Number((+number).toString(8)),
        hexa: (+number).toString(16).toUpperCase(),
      },
    });
  },
  biner: (req, res) => {
    let number = req.params.number;
    res.status(200).json({
      biner: Number(number),
      konversi: {
        decimal: Number(parseInt(number, 2)),
        octal: Number((+parseInt(number, 2)).toString(8)),
        hexa: (+parseInt(number, 2)).toString(16).toUpperCase(),
      },
    });
  },
  octal: (req, res) => {
    let number = req.params.number;
    res.status(200).json({
      octal: Number(number),
      konversi: {
        decimal: Number(parseInt(number, 8)),
        biner: Number((+parseInt(number, 8)).toString(2)),
        hexa: (+parseInt(number, 8)).toString(16).toUpperCase(),
      },
    });
  },
  hexa: (req, res) => {
    let number = req.params.number;
    res.status(200).json({
      hexa: number.toUpperCase(),
      konversi: {
        decimal: Number(parseInt(number, 16)),
        biner: Number((+parseInt(number, 16)).toString(2)),
        octal: Number((+parseInt(number, 16)).toString(8)),
      },
    });
  },
  bmi: (req, res) => {
    const tinggi = req.body.tinggi;
    const berat = req.body.berat;
    const tm = tinggi / 100;
    let bmi = berat / (tm * tm);

    let status;

    if (bmi < 18.5) {
      status = 'Kekurangan Berat Badan';
    } else if (bmi < 24.9 && bmi > 18.5) {
      status = 'Normal (Ideal)';
    } else {
      status = 'Kelebihan Berat Badan';
    }

    res.status(200).json({
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: status,
    });
  },
};
