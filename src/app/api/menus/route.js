// import connectToDB from "@/configs/db";
// import menuModel from '@/models/menu'
// import { publicUploadUrl } from '@/utils/publicBaseUrl'
// import { ensureUploadsRoot } from '@/utils/uploadsStorage'
// import { writeFile } from 'fs/promises'
// import path from 'path'


// export async function POST(req){
//     try {
//        await connectToDB()
//         const formData = await req.formData()
//         const title = formData.get('title')
//         const desc = formData.get('desc')
//         const img =formData.get('img')


//         const buffer = Buffer.from(await img.arrayBuffer());
//         const fileName= Date.now() +img.name
//         const uploadsRoot = await ensureUploadsRoot()
//         const imgPath = path.join(uploadsRoot, fileName)
//         await writeFile(imgPath, buffer)



//         const product = await menuModel.create({
//          title,
//          desc,
//          img: publicUploadUrl(fileName),
//           })
//           return Response.json(
//             { message: 'Product created successfully :))', data: product },
//             { status: 201 },
//           )

//     } catch (error) {
//         return Response.json({ message: error.message }, { status: 500 })
//     }
// }


// export async function PUT(req) {
//      await connectToDB()
//     const formData = await req.formData()
//     const img = formData.get('img')
  
//     // Validation
//     if (!img) {
//       return Response.json(
//         { message: 'Product has not image !!' },
//         { status: 400 },
//       )
//     }
  
//     try {
//       const buffer = Buffer.from(await img.arrayBuffer())
//       const filename = Date.now() + img.name
  
//       const uploadsRoot = await ensureUploadsRoot()
//       await writeFile(path.join(uploadsRoot, filename), buffer)
  
//       // ✅
//       return Response.json(
//         { message: 'File uploaded successfully :))' },
//         { status: 201 },
//       )
//     } catch (err) {
//       console.log(err)
//       return Response.json({ message: err.message }, { status: 500 })
//     }
//   }


//   export async function GET() {
//        await connectToDB()
//     const menu = await menuModel.find({}, '-_v')
//     return Response.json(menu)
//   }
  


import connectToDB from '@/configs/db'
import menuModel from '@/models/menu'
import { put } from '@vercel/blob'

export async function POST(req) {
  try {
    await connectToDB()
    const formData = await req.formData()
    const title = formData.get('title')
    const desc = formData.get('desc')
    const img = formData.get('img')

    if (!img || typeof img === 'string') {
      return Response.json({ message: 'Menu item has no image !!' }, { status: 400 })
    }

    const blob = await put(`menu/${Date.now()}-${img.name}`, img, {
      access: 'public',
    })

    const product = await menuModel.create({
      title,
      desc,
      img: blob.url,
    })

    return Response.json(
      { message: 'Product created successfully :))', data: product },
      { status: 201 },
    )
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 })
  }
}

export async function PUT(req) {
  try {
    await connectToDB()
    const formData = await req.formData()
    const img = formData.get('img')

    if (!img || typeof img === 'string') {
      return Response.json({ message: 'Product has not image !!' }, { status: 400 })
    }

    const blob = await put(`menu/${Date.now()}-${img.name}`, img, {
      access: 'public',
    })

    return Response.json(
      { message: 'File uploaded successfully :))', url: blob.url },
      { status: 201 },
    )
  } catch (err) {
    console.log(err)
    return Response.json({ message: err.message }, { status: 500 })
  }
}

export async function GET() {
  await connectToDB()
  const menu = await menuModel.find({}, '-__v')
  return Response.json(menu)
}