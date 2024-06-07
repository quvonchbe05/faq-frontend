import React, { useEffect, useState } from 'react';
import { Card, Button } from "flowbite-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaRegEye } from "react-icons/fa";

const Home = ({ setLoader }) => {
    const [subjects, setSubjects] = useState([])

    const fetchSubjects = async () => {
        setLoader(true)
        await axios.get('http://127.0.0.1:8000/api/subjects')
            .then((res) => {
                setSubjects(res.data);
            })
            .catch((error) => {
                setSubjects(error)
            })
        setLoader(false)
    }
    useEffect(() => {
        fetchSubjects()
    }, [])

    return (
        <div>
            <h5 className="mb-5 text-2xl text-center font-bold text-gray-900 dark:text-white">
                Subjects
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
                {
                    subjects && subjects.length ?
                        subjects.map(subject => {
                            return (
                                <Card>
                                    <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {subject.title}
                                    </h5>
                                    <Link to={`/subject/${subject.id}`}>
                                        <Button className='w-full' color="gray"><FaRegEye /></Button>
                                    </Link>
                                </Card>
                            )
                        }) : <p className='text-base text-gray-500 dark:text-gray-400 sm:text-lg'>Subjects not found!</p>
                }
            </div>
        </div>
    );
};

export default Home;