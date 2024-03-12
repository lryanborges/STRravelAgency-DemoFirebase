import logo from './logo.svg';
import "./Post.css";

function Post(props) {

    return(
        <div className="Post">

            <div className="postTexts" >
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <spam className="postDiv">.</spam>
            </div>

            <img src={props.image} className="postImage" alt="logo"></img>
               
            <div className="postButtons">
                <button className="detailsButton">Detalhes</button>
                <button onClick={() => props.delete(props.id)} className="deleteButton">Deletar</button>
            </div>
            
        </div>
    );

}

export default Post;