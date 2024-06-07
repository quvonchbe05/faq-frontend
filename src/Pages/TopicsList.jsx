import React, { useEffect, useState } from 'react';
import { Card, List, Button } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const TopicsList = ({ setLoader }) => {
    const [subject, setSubject] = useState(null)
    const params = useParams()
    const fetchSubject = async () => {
        setLoader(true)
        await axios.get(`http://127.0.0.1:8000/api/subjects/${params.id}`)
            .then((res) => {
                setSubject(res.data);
            })
            .catch((error) => {
                setSubject(error)
            })
        setLoader(false)
    }
    useEffect(() => {
        fetchSubject()
    }, [])
    return (
        <div>
            <h5 className="mb-5 text-2xl text-center font-bold text-gray-900 dark:text-white">
                Topics
            </h5>
            {
                subject ?
                    <Card>
                        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                            {subject.title}
                        </h5>
                        <List>
                            {
                                subject.topics.length ? subject.topics.map(topic => {
                                    return <List.Item className='text-2xl'><Link to={`/subject/topic/${topic.id}`}>{topic.title}</Link></List.Item>
                                }) : <div className='text-center'>
                                    <p className='text-base text-gray-500 dark:text-gray-400 sm:text-lg'>Topics not found!</p>
                                </div>
                            }
                        </List>
                        <Link to={'/'}>
                            <Button className='w-full' color="gray">Back</Button>
                        </Link>
                    </Card>
                    : null
            }
        </div>
    );
};

export default TopicsList;