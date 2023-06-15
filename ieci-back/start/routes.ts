/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
  Route.post('/session', 'AuthenticatesController.store')
  Route.delete('/session', 'AuthenticatesController.destroy')
  Route.resource('category', 'CategoriesController').except(['create', 'edit'])
  Route.post('/users','UsersController.store')
  Route.resource('course', 'CoursesController').except(['create', 'edit'])
})

Route.group(() =>{
  Route.resource('/personalData', 'PersonalDataController').except(['create', 'edit'])
  Route.post('/personalData/course/:id','PersonalDataController.storePersonalData')
  Route.post('/address/course/:id', 'AddressesController.storeAddressCourse')
  Route.post('/academicData/course/:id', 'AcademicDataController.storeAcademicDataCourse')
  Route.resource('/academicData', 'AcademicDataController').except(['create', 'edit'])
  Route.resource('/address', 'AddressesController').except(['create', 'edit'])
  Route.get('/users','UsersController.index')
  Route.get('/users/:id','UsersController.getUser')
  Route.get('/users/:id/courses','UsersController.userCourses')

  Route.post('/course/store','CoursesController.store')
  Route.post('/course_payment/:id','PaidCoursesController.store')
  Route.get('/course_payment/:id','PaidCoursesController.getPaidUserCourse')

  Route.post('/process-payment','ProcessPaymentController.store')
}).middleware('auth')


Route.group(() =>{
  Route.get('/admin/user/:id','AdminController.show')
  Route.get('/admin/getAllUsers','AdminController.index')
  Route.put('/users','UsersController.updatePassword')
  Route.put('/admin/:id/updatedPaidCourse', 'PaidCoursesController.update')

}).middleware(['auth','hasAdmin'])

Route.post('/importExcelData','ImportExcelDataController.import')


