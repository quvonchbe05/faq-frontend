import { Card, Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TopicView = ({ setLoader }) => {
    const navigate = useNavigate()
    const [topic, setTopic] = useState(null)
    const params = useParams()
    const fetchSubject = async () => {
        setLoader(true)
        await axios.get(`http://127.0.0.1:8000/api/topics/${params.id}`)
            .then((res) => {
                setTopic(res.data);
            })
            .catch((error) => {
                setTopic(error)
            })
        setLoader(false)
    }
    useEffect(() => {
        fetchSubject()
    }, [])
    return (
        <div>
            {
                topic ?
                    <Card>
                        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                            {topic.title}
                        </h5>
                        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                            {topic.description}
                        </p>
                        <Button onClick={() => navigate(-1)} className='w-full' color="gray">Back</Button>
                    </Card>
                    : null
            }
        </div>
    );
};

export default TopicView;