import { useEffect } from "react";
import { useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import Heading from "../Shared/Heading";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true);
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
                if (category) {
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                }
                else setRooms(data)

                setLoading(false)
            })
    }, [category])
    // console.log(rooms)

    if (loading) return <Loader />
    return (
        <Container>
            {
                rooms && rooms.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                    {rooms.map(room => <RoomCard key={room._id} room={room} />)}
                </div> :
                    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]"><Heading title={'No Rooms Available in This Category!'} center={true} subtitle={'Please Select Other Categories.'} /></div>
            }
        </Container>
    );
};

export default Rooms;