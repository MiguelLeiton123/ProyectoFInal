const productos = [
  {
    id: 1,
    nombre: "Silla Gamer Razer Iskur X",
    precio: 350000,
    imagen: "[Imagen de Silla Gamer Razer Iskur X]",
    marca: "Razer",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer ergonómica con soporte lumbar ajustable y reposacabezas reclinable.",
  },
  {
    id: 2,
    nombre: "Silla Gamer Secretlab Titan Evo 2022",
    precio: 420000,
    imagen: "[Imagen de Silla Gamer Secretlab Titan Evo 2022]",
    marca: "Secretlab",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer de alta gama con materiales de primera calidad y soporte lumbar 4D.",
  },
  {
    id: 3,
    nombre: "Silla Gamer Corsair T1 Race",
    precio: 280000,
    imagen: "[Imagen de Silla Gamer Corsair T1 Race]",
    marca: "Corsair",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer cómoda y resistente con reposapiés retráctil y respaldo reclinable.",
  },

  {
    id: 4,
    nombre: "Silla Gamer Noblechairs Hero",
    precio: 320000,
    imagen: "[Imagen de Silla Gamer Noblechairs Hero]",
    marca: "Noblechairs",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer ergonómica con diseño elegante y soporte lumbar ajustable.",
  },

  {
    id: 5,
    nombre: "Silla Gamer DXRacer OH/RS1",
    precio: 250000,
    imagen: "[Imagen de Silla Gamer DXRacer OH/RS1]",
    marca: "DXRacer",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer económica con buena calidad de materiales y diseño deportivo.",
  },

  {
    id: 6,
    nombre: "Silla Gamer Vertagear Iron Throne L500",
    precio: 380000,
    imagen: "[Imagen de Silla Gamer Vertagear Iron Throne L500]",
    marca: "Vertagear",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer de alta gama con diseño futurista y soporte lumbar 4D.",
  },

  {
    id: 7,
    nombre: "Silla Gamer AKRacing Nitro Pro",
    precio: 230000,
    imagen: "[Imagen de Silla Gamer AKRacing Nitro Pro]",
    marca: "AKRacing",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer cómoda y versátil con reposabrazos ajustables en 4D y respaldo reclinable.",
  },

  {
    id: 8,
    nombre: "Silla Gamer Arozzi Verona Pro V2",
    precio: 360000,
    imagen: "[Imagen de Silla Gamer Arozzi Verona Pro V2]",
    marca: "Arozzi",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer de alta gama con diseño elegante y materiales de primera calidad.",
  },

  {
    id: 9,
    nombre: "Silla Gamer Cooler Master ErgoChair 2",
    precio: 300000,
    imagen: "[Imagen de Silla Gamer Cooler Master ErgoChair 2]",
    marca: "Cooler Master",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer ergonómica con soporte lumbar ajustable y reposacabezas reclinable.",
  },

  {
    id: 10,
    nombre: "Silla Gamer ASUS ROG Strix XG1",
    precio: 400000,
    imagen: "[Imagen de Silla Gamer ASUS ROG Strix XG1]",
    marca: "ASUS",
    categoria: "sillas-gamer",
    descripcion:
      "Silla gamer de alta gama con diseño inspirado en la estética ROG y soporte lumbar 4D.",
  },
  {
    id: 11,
    nombre: "Teclado Gamer Razer Huntsman V2 Analog",
    precio: 280000,
    imagen: "[Imagen de Teclado Gamer Razer Huntsman V2 Analog]",
    marca: "Razer",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer con interruptores analógicos para un control preciso y personalización ilimitada.",
  },

  {
    id: 12,
    nombre: "Teclado Gamer Corsair K100 RGB OPX",
    precio: 320000,
    imagen: "[Imagen de Teclado Gamer Corsair K100 RGB OPX]",
    marca: "Corsair",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con interruptores ópticos y switches Cherry MX Speed Silver.",
  },

  {
    id: 13,
    nombre: "Teclado Gamer Logitech G915 TKL Lightspeed",
    precio: 350000,
    imagen: "[Imagen de Teclado Gamer Logitech G915 TKL Lightspeed]",
    marca: "Logitech",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer inalámbrico con switches Romer-G LINEARES y tecnología Lightspeed.",
  },

  {
    id: 14,
    nombre: "Teclado Gamer HyperX Alloy Origins Core Tenkeyless",
    precio: 230000,
    imagen: "[Imagen de Teclado Gamer HyperX Alloy Origins Core Tenkeyless]",
    marca: "HyperX",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con switches HyperX Pudding PBT y diseño tenkeyless.",
  },

  {
    id: 15,
    nombre: "Teclado Gamer SteelSeries Apex Pro Mini Wireless",
    precio: 300000,
    imagen: "[Imagen de Teclado Gamer SteelSeries Apex Pro Mini Wireless]",
    marca: "SteelSeries",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer inalámbrico con switches ajustables OmniPoint 2.0 y diseño compacto.",
  },

  {
    id: 16,
    nombre: "Teclado Gamer Ducky One 2 Mini RGB White",
    precio: 250000,
    imagen: "[Imagen de Teclado Gamer Ducky One 2 Mini RGB White]",
    marca: "Ducky",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con switches Cherry MX y diseño tenkeyless.",
  },

  {
    id: 17,
    nombre: "Teclado Gamer Asus ROG Strix Flare TKL",
    precio: 280000,
    imagen: "[Imagen de Teclado Gamer Asus ROG Strix Flare TKL]",
    marca: "ASUS",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con switches Cherry MX RGB y diseño tenkeyless.",
  },

  {
    id: 18,
    nombre: "Teclado Gamer NZXT Vulcan Pro Mini",
    precio: 270000,
    imagen: "[Imagen de Teclado Gamer NZXT Vulcan Pro Mini]",
    marca: "NZXT",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con switches Kailh Box Brown y diseño tenkeyless.",
  },

  {
    id: 19,
    nombre: "Teclado Gamer Razer BlackWidow V3 Tenkeyless",
    precio: 240000,
    imagen: "[Imagen de Teclado Gamer Razer BlackWidow V3 Tenkeyless]",
    marca: "Razer",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con switches Razer Green y diseño tenkeyless.",
  },

  {
    id: 20,
    nombre: "Teclado Gamerprecio: 310000",
    imagen: "[Imagen de Teclado Gamer Logitech G913 TKL Lightspeed]",
    marca: "Logitech",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer inalámbrico con switches Romer-G TÁCTILES y tecnología Lightspeed.",
  },

  {
    id: 21,
    nombre: "Teclado Gamer Glorious GMMK Pro 75%",
    precio: 380000,
    imagen: "[Imagen de Teclado Gamer Glorious GMMK Pro 75%]",
    marca: "Glorious",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico hot-swappable con diseño 75% y switches Gateron G Pro Yellow.",
  },

  {
    id: 22,
    nombre: "Teclado Gamer Fnatic Streak65 LP",
    precio: 290000,
    imagen: "[Imagen de Teclado Gamer Fnatic Streak65 LP]",
    marca: "Fnatic",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico low profile con switches FlareTech Linear y diseño 65%.",
  },

  {
    id: 23,
    nombre: "Teclado Gamer Cooler Master MasterKeys Pro L White",
    precio: 220000,
    imagen: "[Imagen de Teclado Gamer Cooler Master MasterKeys Pro L White]",
    marca: "Cooler Master",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico con switches Cherry MX Red y diseño minimalista.",
  },

  {
    id: 24,
    nombre: "Teclado Gamer MSI Vigor GK71 Slim",
    precio: 260000,
    imagen: "[Imagen de Teclado Gamer MSI Vigor GK71 Slim]",
    marca: "MSI",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer mecánico low profile con switches Kailh Box White y diseño compacto.",
  },

  {
    id: 25,
    nombre: "Teclado Gamer Logitech G413 SE",
    precio: 180000,
    imagen: "[Imagen de Teclado Gamer Logitech G413 SE]",
    marca: "Logitech",
    categoria: "teclados-gamer",
    descripcion:
      "Teclado gamer con teclas Romer-G TÁCTILES y diseño minimalista.",
  },
  {
    id: 26,
    nombre: "Mouse Gamer Logitech G502 Hero",
    precio: 150000,
    imagen: "[Imagen de Mouse Gamer Logitech G502 Hero]",
    marca: "Logitech",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer inalámbrico con sensor HERO de alta precisión y 11 botones programables.",
  },

  {
    id: 27,
    nombre: "Mouse Gamer Razer DeathAdder V2 Pro",
    precio: 200000,
    imagen: "[Imagen de Mouse Gamer Razer DeathAdder V2 Pro]",
    marca: "Razer",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer inalámbrico ultraligero con switches ópticos y sensor Razer Focus+.",
  },

  {
    id: 28,
    nombre: "Mouse Gamer SteelSeries Rival 5",
    precio: 180000,
    imagen: "[Imagen de Mouse Gamer SteelSeries Rival 5]",
    marca: "SteelSeries",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer ambidiestro con switches ópticos y sensor TrueMove Air.",
  },

  {
    id: 29,
    nombre: "Mouse Gamer Corsair M65 RGB Elite",
    precio: 160000,
    imagen: "[Imagen de Mouse Gamer Corsair M65 RGB Elite]",
    marca: "Corsair",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer ergonómico con switches ópticos y sensor PixArt PMW3360.",
  },

  {
    id: 30,
    nombre: "Mouse Gamer HyperX Pulsefire Surge",
    precio: 120000,
    imagen: "[Imagen de Mouse Gamer HyperX Pulsefire Surge]",
    marca: "HyperX",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer ligero con switches Kailh TTC Red y sensor PixArt PMW3325.",
  },

  {
    id: 31,
    nombre: "Mouse Gamer Logitech G Pro Wireless",
    precio: 230000,
    imagen: "[Imagen de Mouse Gamer Logitech G Pro Wireless]",
    marca: "Logitech",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer inalámbrico ultraligero con sensor HERO de alta precisión y switches Lightspeed.",
  },

  {
    id: 32,
    nombre: "Mouse Gamer Razer Viper Mini Signature Edition",
    precio: 190000,
    imagen: "[Imagen de Mouse Gamer Razer Viper Mini Signature Edition]",
    marca: "Razer",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer inalámbrico ultraligero con switches ópticos y sensor Razer Focus+.",
  },

  {
    id: 33,
    nombre: "Mouse Gamer SteelSeries Sensei Ten",
    precio: 140000,
    imagen: "[Imagen de Mouse Gamer SteelSeries Sensei Ten]",
    marca: "SteelSeries",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer ambidiestro con switches ópticos y sensor TrueMove Air.",
  },

  {
    id: 34,
    nombre: "Mouse Gamer Corsair M65 RGB Elite - White",
    precio: 160000,
    imagen: "[Imagen de Mouse Gamer Corsair M65 RGB Elite - White]",
    marca: "Corsair",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer ergonómico con switches ópticos y sensor PixArt PMW3360.",
  },

  {
    id: 35,
    nombre: "Mouse Gamer HyperX Pulsefire Core",
    precio: 80000,
    imagen: "[Imagen de Mouse Gamer HyperX Pulsefire Core]",
    marca: "HyperX",
    categoria: "mouses-gamer",
    descripcion: "Mouse gamer con sensor PixArt 3327 y botones programables.",
  },

  {
    id: 36,
    nombre: "Mouse Gamer Logitech G203 Lightsync",
    precio: 70000,
    imagen: "[Imagen de Mouse Gamer Logitech G203 Lightsync]",
    marca: "Logitech",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer con sensor HERO de 8.000 DPI y tecnología Lightsync RGB.",
  },

  {
    id: 37,
    nombre: "Mouse Gamer Razer DeathAdder Essential",
    precio: 100000,
    imagen: "[Imagen de Mouse Gamer Razer DeathAdder Essential]",
    marca: "Razer",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer con sensor óptico de 6.400 DPI y switches Razer 5G.",
  },

  {
    id: 38,
    nombre: "Mouse Gamer SteelSeries Rival 3 Wireless",
    precio: 130000,
    imagen: "[Imagen de Mouse Gamer SteelSeries Rival 3 Wireless]",
    marca: "SteelSeries",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer inalámbrico con sensor TrueMove Air y batería de larga duración.",
  },

  {
    id: 39,
    nombre: "Mouse Gamer Corsair Katar Pro XT",
    precio: 110000,
    imagen: "[Imagen de Mouse Gamer Corsair Katar Pro XT]",
    marca: "Corsair",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer ultraligero con switches Omron y sensor PixArt 3389.",
  },

  {
    id: 40,
    nombre: "Mouse Gamer ASUS ROG Strix Impact II Wireless",
    precio: 170000,
    imagen: "[Imagen de Mouse Gamer ASUS ROG Strix Impact II Wireless]",
    marca: "ASUS",
    categoria: "mouses-gamer",
    descripcion:
      "Mouse gamer inalámbrico con sensor óptico de 12.000 DPI y switches Omron.",
  },
  {
    id: 41,
    nombre: "Monitor Gamer ASUS ROG Swift PG32UQXE",
    precio: 5500000,
    imagen: "[Imagen de Monitor Gamer ASUS ROG Swift PG32UQXE]",
    marca: "ASUS",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer de 32 pulgadas con resolución 4K UHD, panel Mini LED y frecuencia de actualización de 160Hz.",
  },

  {
    id: 42,
    nombre: "Monitor Gamer Alienware AW2523HF",
    precio: 2800000,
    imagen: "[Imagen de Monitor Gamer Alienware AW2523HF]",
    marca: "Alienware",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer de 25 pulgadas con resolución Full HD, panel TN y frecuencia de actualización de 360Hz.",
  },

  {
    id: 43,
    nombre: "Monitor Gamer Samsung Odyssey G9",
    precio: 5000000,
    imagen: "[Imagen de Monitor Gamer Samsung Odyssey G9]",
    marca: "Samsung",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer curvo de 49 pulgadas con resolución Super Ultrawide DQHD y frecuencia de actualización de 240Hz.",
  },

  {
    id: 44,
    nombre: "Monitor Gamer LG UltraGear 38WN950-B",
    precio: 3500000,
    imagen: "[Imagen de Monitor Gamer LG UltraGear 38WN950-B]",
    marca: "LG",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer curvo de 38 pulgadas con resolución UltraWide QHD+ y frecuencia de actualización de 144Hz.",
  },

  {
    id: 45,
    nombre: "Monitor Gamer MSI Optix MAG321CQR-V",
    precio: 2500000,
    imagen: "[Imagen de Monitor Gamer MSI Optix MAG321CQR-V]",
    marca: "MSI",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer curvo de 32 pulgadas con resolución WQHD y frecuencia de actualización de 165Hz.",
  },

  {
    id: 46,
    nombre: "Monitor Gamer Gigabyte AORUS FI27Q-X",
    precio: 3000000,
    imagen: "[Imagen de Monitor Gamer Gigabyte AORUS FI27Q-X]",
    marca: "Gigabyte",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer de 27 pulgadas con resolución QHD y frecuencia de actualización de 165Hz.",
  },

  {
    id: 47,
    nombre: "Monitor Gamer Acer Nitro XV272U KF",
    precio: 2200000,
    imagen: "[Imagen de Monitor Gamer Acer Nitro XV272U KF]",
    marca: "Acer",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer de 27 pulgadas con resolución 4K UHD y frecuencia de actualización de 144Hz.",
  },

  {
    id: 48,
    nombre: "Monitor Gamer HP Omen X27 250Q",
    precio: 2700000,
    imagen: "[Imagen de Monitor Gamer HP Omen X27 250Q]",
    marca: "HP",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer de 27 pulgadas con resolución QHD y frecuencia de actualización de 240Hz.",
  },

  {
    id: 49,
    nombre: "Monitor Gamer AOC AGON AG273QCX",
    precio: 2000000,
    imagen: "[Imagen de Monitor Gamer HP Omen X27 250Q]",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer curvo de 27 pulgadas con resolución QHD y frecuencia de actualización de 165Hz.",
  },

  {
    id: 50,
    nombre: "Monitor Gamer BenQ Zowie XL2546K",
    precio: 3200000,
    imagen: "[Imagen de Monitor Gamer BenQ Zowie XL2546K]",
    marca: "BenQ",
    categoria: "monitores-gamer",
    descripcion:
      "Monitor gamer de 24.5 pulgadas con resolución Full HD y frecuencia de actualización de 240Hz.",
  },
];
console.log(productos);
