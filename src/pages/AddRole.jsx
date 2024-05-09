import { Button, Card, Checkbox, TextInput, Textarea } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import apiRequest from '../helpers/HttpRequestHelper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRole = () => {
    const [permissions, setPermissions] = useState([])
    const [loading, setLoading] = useState(true)
    const [roleName, setRoleName] = useState('')
    const [roleDescription, setRoleDescrption] = useState('')
    const [selectedPermissions, setSelectedPermissions] = useState({});

    const navigate = useNavigate()
    useEffect(()=>{
      const fetchPermissions =async () =>{
        setLoading(true)
        let token = localStorage.getItem("token")
        console.log(token);
        let response = await apiRequest("get","/management/permissions",null,{"Authorization":`Bearer ${token}`})
        setPermissions(response.data)
        setLoading(false)
        console.log(response.data)
      }
      fetchPermissions()
    }, [])

    const handlePermissionChange = (permissionDescription, category, checked) => {
        setSelectedPermissions(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [permissionDescription]: checked
            }
        }));
    };

    const AddNewRole = async(roleName, roleDescription) =>{
        let token = localStorage.getItem("token")
        const formattedPermissions = Object.entries(selectedPermissions).map(([category, permissions]) => ({
            [category]: Object.entries(permissions)
                .filter(([_, isChecked]) => isChecked)
                .map(([permissionDescription, _]) => permissionDescription)
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {});
        console.log(formattedPermissions);
        let data = {
            roleName: roleName,
            roleDescription: roleDescription,
            permissions: formattedPermissions
        }
        console.log(data);
        const response =await apiRequest('post',"/management/roles/add",
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
                <Link to="/manage-roles"><BiArrowBack/></Link>
                <h4 className='font-bold mr-auto ml-4'> Add new role</h4>
            </div>
        </Card>
        <Card className='mt-10'>
            <div className='flex'>
                <div className='mr-auto'>
                    <div>
                        <p className='text-left font-bold'>ROLE NAME</p>
                        <TextInput className='w-64' placeholder='Name your role' value={roleName} onChange={e => setRoleName(e.target.value)}/>
                    </div>
                    <div>
                        <p className='text-left mt-4 font-bold'>PERMISSION</p>
                        <Textarea rows={4} placeholder='Describe your role' value={roleDescription} onChange={e => setRoleDescrption(e.target.value)}/>
                    </div>
                </div>
                <div className='text-left ml-40'>
                    <p className='text-lg font-bold'>Permissions</p>
                    {Object.entries(permissions).map(([category, permissions]) => (
                    <div className='mt-4' key={category}>
                        <h4 className='mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                        {permissions.map(p =>(
                            <div className='flex items-center' key={p.id}>
                                <Checkbox onChange={e => handlePermissionChange(p.description, category, e.target.checked)}/> <h4 className='ml-2 text-sm'>{p.description}</h4>
                            </div>
                        ))}
                        
                        
                    </div>
                    ))}
                    <div>
                        <Button className='mt-10 rounded-none' color='blue' onClick={()=>AddNewRole(roleName,roleDescription)}>CREATE ROLE</Button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </Card>
    </>
  )
}

export default AddRole