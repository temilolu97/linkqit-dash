import { Button, Card, Label, Select, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
    const [roles, setRoles] = useState([])
    const [loading, setLoading] = useState(true)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [roleId, setRoleId] = useState()
    const [password,setPassword]= useState('')
    const [gender, setGender] = useState('')

    const navigate = useNavigate()
    useEffect(()=>{
        const fetchRoles =async () =>{
        setLoading(true)
        let token = localStorage.getItem("token")
        console.log(token);
        let response = await apiRequest("get","/management/roles",null,{"Authorization":`Bearer ${token}`})
        setRoles(response.data)
        setLoading(false)
        console.log(response.data)
        }
        fetchRoles()
    }, [])

    const createEmployee = async ()=>{
        let data ={
            firstName: fullName.split(" ")[0],
            lastName: fullName.split(" ")[1],
            email: email,
            mobile: mobile,
            roleId: Number(roleId),
            gender: gender,
            password:password
          }
        console.log(data);
        let token = localStorage.getItem("token")
        const response =await apiRequest('post',"/management/employees/add",
            data,{"Authorization":`Bearer ${token}`}
        )
        if(response.statusCode == "00"){
            toast.success(response.message,{
                onClose: () => {
                  navigate(-1);
                }
            })

        }
        else{
            toast.info(response.message)
        }
        console.log(response.data);
    }
  return (
    <>
        <Card>
            <div className='flex items-center'>
                <Link to="/management"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Add Employee</h4>
            </div>
        </Card>
        <Card className='mt-10'>
            <div className='flex'>
                <div>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="employeeName" value="EMPLOYEE NAME" />
                        </div>
                        <TextInput id="employeeName"  value={fullName} onChange={e=> setFullName(e.target.value)}/>
                    </div>
                    <div>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="phoneNumber" value="PHONE NUMBER" />
                        </div>
                        <TextInput id="phoneNumber" value={mobile} onChange={e=> setMobile(e.target.value)}/>
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block text-left">
                            <Label htmlFor="gender" value="GENDER" />
                        </div>
                        <Select id="gender" required value={gender} onChange={e=> setGender(e.target.value)}>
                            <option value="">Select your gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </Select>
                    </div>
                </div>
                <div className='ml-auto'>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="email" value="EMAIL ADDRESS" />
                        </div>
                        <TextInput id="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="role" value="ROLE" />
                        </div>
                        <Select id="role" required value={roleId} onChange={e=> setRoleId(e.target.value)}>
                            <option value="">Select a role</option>
                            {roles.map(role =>(
                                <option value={role.id}>{role.role}</option>
                            ))}
                        </Select>
                    </div>
                    <div className='w-80'>
                        <div className="mb-2 block text-left">
                            <Label htmlFor="password" value="CREATE PASSWORD" />
                        </div>
                        <TextInput type='password' id="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <Button className='mt-10 ml-auto rounded-none' color='blue' onClick={()=>createEmployee()}>ADD EMPLOYEE</Button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </Card>
    </>
  )
}

export default AddEmployee