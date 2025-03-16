"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Avatar, Button, Input } from "@heroui/react";
import axios from "axios";

const EditProfile = ({ user }) => {
    const router = useRouter;
    const [formData, setFormData]= useState ({
        name: user?.name || "",
        email: user?.email || "",
        avatar: user?.avatar || "",
        password: "",
    })

    const [loading, setLoading] =useState(false);


    const handleChange = (e) => {
        setFormData ({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
       e.prevenDefault();
       setLoading(true);

         try {
        await axios.put("/api/profile/route.js",formData);
        alert("Profil berhasil diperbarui");
        router.push("/profile");
       } catch (error) {
         console.error("gagal memperbarui profil",error);
         alert("terjadi kesalahan coba lagi.");
       } finally {
        setLoading(false);
       }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Nama</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukan Nama"
                    />   
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukan Email"
                    />   
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukan Password"
                    />   
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Foto Profil</label>
                    <Input
                    type="text"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                    placeholder="Masukan URL Gambar"
                    /> 
                    {formData.avatar && (
                        <Avatar
                        src={formData.avatar}
                        alt="preview"
                        className="mt-2 w-20 h-20 rounded-full"     
                        />
                )}  
                </div>
            

                <Button type="submit" className="w-full bg-blue-600  text-white" disabled={loading}> {loading ? "saving..." : "Save Change"}
            </Button>
            </form>
        </div>
    );
};
 export default EditProfile;