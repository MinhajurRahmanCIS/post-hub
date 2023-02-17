import React, { useContext }  from 'react';
import { AuthContext } from '../context/AuthProvider';

const ModalAbout = ({userInfo}) => {
    console.log(userInfo[0]._id)
    const { user, updateUser } = useContext(AuthContext);
    let userProfile = userInfo.find(u => u.email === user.email);
    const handelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const university = form.university.value;

        console.log(name, address, university);

        const userProfile = {
            name: name,
            address: address,
            university: university
        }

        fetch(`http://localhost:5000/userProfile/${userInfo[0]._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then(result =>{
            const updateName = {
                displayName: name
            }
            updateUser(updateName)
            .then(() => {})
            .catch(err => console.error(err))
                alert('success');
        })

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handelUpdate}>
                        <div className="card-body">
                            <h1 className='text-4xl font-bold'>Update User Profile</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" defaultValue={user.displayName} placeholder="Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email address" className="input input-bordered" disabled defaultValue={user?.email} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input name='university' type="text" placeholder="University" className="input input-bordered" defaultValue={user?.university ? '' : userProfile?.university ? userProfile?.university : 'University not found'} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input name='address' type="text" placeholder="Address" className="input input-bordered" defaultValue={user?.address ? '' : userProfile?.address ? userProfile?.address : 'Address not found'} />
                            </div>
                        </div>
                        <div className="modal-action">
                            <button className='btn' type="submit">update</button>
                            <label htmlFor="my-modal-6" className="btn">Close</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalAbout;