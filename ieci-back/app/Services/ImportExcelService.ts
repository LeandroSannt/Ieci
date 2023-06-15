import Course from "App/Models/Course"
import Subject from "App/Models/Subject"
import readXlsxFile from "read-excel-file/node"

interface ObjectProps{
  title:string
  cargo:number
  curso_id:number
}

interface CourseFind{
  description:string
  course_load:number
  course_id:number
}

interface FileProps{
  curso?:string
  disciplina:{
    title:string,
    carga:number
  }
}

interface ArrProps{
  category_id:number
  id:number
  curso:string
  disciplinas:Array<ObjectProps>
}

class ImportExcelService{

  async import(excel:any) {
  try{
  const schema = {
    'CURSO': {
      prop: 'curso',
      type: String,
    },
    'DISCIPLINAS': {
      prop: 'disciplina',
      type: {
        'DISCIPLINAS':{
          prop:'title',
          type:String
        },
        'CARGA':{
          prop:'carga',
          type:Number
        }
      },
    }
  }


  const dataImport =  await readXlsxFile(excel.tmpPath,{schema})
  const courses:CourseFind[] = await Course.query()


// dataImport.rows.map(async(r:FileProps) =>{

//   await Course.create({
//       title:r.curso,
//       category_id:2,
//     }).catch((t) =>{
//       console.log(t)
//     })
//   })


  var arr:ArrProps[] = []
  let obj:any = {
    category_id:2,
    id:0
  }

  dataImport.rows.forEach((row:FileProps) =>{
    const disciplinas = row.disciplina
    const concatDisciplinas = {...disciplinas}
    if(row.curso){
      if(obj.curso){
        arr.push(obj)

        obj = {}
      }

      obj.curso = row.curso
      obj.category_id = 2
      obj.disciplinas = [concatDisciplinas]
    }else{
      obj.disciplinas.push(concatDisciplinas)
    }
  })


let countCourses = courses.length
  const somenteDisciplinas:Array<{title:string,carga:number,curso_id:number}> = []

  courses.forEach((course) =>{

   const  t =  countCourses + 1

   console.log(t)


    arr.forEach((c,index) =>{

      c.disciplinas.forEach((t) =>{
       // console.log(t)
        t.curso_id = c.id
      })
    })
   })




  return arr

  // arr.forEach((element:any) => {somenteDisciplinas.push(...element.disciplinas)});
  //   somenteDisciplinas.forEach(async(element) =>{
  //     await Subject.create({
  //       description:element.title,
  //       course_load:element.carga,
  //       course_id:element.curso_id
  //     })
  // })

   }catch(err){
     console.log(err)
   }
  }
}

export {ImportExcelService}


