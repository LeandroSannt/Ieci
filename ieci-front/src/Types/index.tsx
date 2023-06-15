

export interface AreasProps {
  id:number
  name:string
  emblem:string
  course:CoursesProps[]
}

export interface User{
  id:number
  email:string
  name:string
  isAdmin?:boolean
}

export interface Areas{
  id:number
  name:string
  emblem:string
}

export interface SubjectsProps {
  id:number
  description:string
  course_load:number
  course_id:number
}

export interface CoursesProps{
  id:number
  title:string
  category_id:number
  subject:Array<SubjectsProps>
  category:{
    id:number
    name:string
    emblem:string
  }
}

export interface ResponseQrCode{
  qr_code:string 
  qr_code_base64: string
  ticket_url: string
}

export interface CourseProps{
  category_id: number
  id: number
  priceSubscription: number
  title: string
  totalHours: number
}

export interface PersonalDataProps{
  id:number
  name:string
  course:string
  email:string
  cpf:string
  rg:string
  dispatcher:string
  birth_date:Date
  gender:string
  father_name:string
  mother_name:string
  birth_city:string
  nacionality:string
  phone_number:string
  cell_number:string
  created_ate:Date
}

export interface AddressProps{
  id:number
  cep:string
  city:string
  street:string
  state:string
  district:string
  adress_number:number
  complement:string
}

export interface AcademicDataProps{
  id:number
  graduation:string
  year_graduated:string
  institution_graduated:string
  expiration:Date
  number_months:number
  created_at:Date
}

export interface PaidCourses{
  id:number
  name:string
  email:string
  time: Date | null
  status:"Matriculado" | "Pendente" | "Cadastrado"
  user_id:number
  course_id:number
  academic_data_id:number
  address_id:number
  personal_data_id:number
  created_at:Date
  paidUser:User
  paidCourse:{
    id:number
    category_id:number
    title:string
    total_sum:number | null
  }
  paidPersonalData:PersonalDataProps
  paidAddress:AddressProps
  paidAcademicData:AcademicDataProps
}


export interface UserCoursesProps{
  id:number
  email:string
  name:string
  userCourses:PaidCourses[]
}