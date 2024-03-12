import Post from "./Post";
import Header from "./Header"
import Form from "./Form";
import "./Posts.css";
import banner from "./assets/banner.png"
import { useEffect, useState } from "react";
import { firebaseApp } from "./FirebaseConfig.jsx";
//import { collection, getFirestore, getDocs, addDoc, doc, deleteDoc, ref, uploadBytes, getDownloadURL } from "firebase/firestore";
import { getDatabase, ref, push, remove, onValue, off, set } from "firebase/database";

function Posts() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [posts, setPosts] = useState();

    const database = getDatabase(firebaseApp);
    const postsRef = ref(database, "posts")

    async function createPost() {
        const post = await push(postsRef, {
            title,
            description,
            image,
        });

        /* caso eu queira dar o update ou atualizar algum dado:
        await set(post, {
            title,
            description,
            image,
        })
        */

        // aqui é só pra limpar dps de fazer o post
        setTitle('');
        setDescription('');
        setImage('');
    }

    async function deletePost(postId) {
        const postRef = ref(database, `posts/${postId}`);
        await remove(postRef);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const handleData = (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const postsArray = Object.keys(data).map((key) => ({
                    ...data[key],
                    id: key,
                }));
                setPosts(postsArray);
            }
        };

        onValue(postsRef, handleData);

    }, [postsRef])

    return (
        <div className="Main">

            <img src={banner} className="imageBanner"/>

            <Header />

            <div className="content">
                <Form title={title} description={description} setTitle={setTitle} setDescription={setDescription} handleImageChange={handleImageChange} createPost={createPost} />

                <div className="postSpace">
                    {posts && posts.map((post) => { // se o dado "post" não for indefinido (retorna true), aí faz o retorno do elemento do map
                        return (
                            <div key={post.id}>
                                <Post id={post.id} title={post.title} description={post.description} image={post.image} delete={deletePost} ></Post>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );

}

export default Posts;