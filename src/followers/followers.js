import { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios"

const FollowerList = () => {

    const [followers, setFollowers] = useState([]);

    useEffect( () => {
        fetchFollowers();
    }, []);

    const fetchFollowers = async () => {
        const { data } = await axios.get("https://randomuser.me/api/?results=5")
        setFollowers( data.results ); 
    }

    return (
        <Fragment>
            {followers.map(follower => 
                (   <div>
                        <h2>{follower.name.first}</h2>
                        <h2>{follower.name.last}</h2>
                    </div>
                ) 
            )}
        </Fragment>
    );
}
 
export default FollowerList;