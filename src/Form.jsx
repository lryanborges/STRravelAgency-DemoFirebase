import "./Form.css"

function Form(props) {

    return(
        <div className="formContent">

            <h1>Cadastrar Ponto Turístico</h1>

            <input type="text" placeholder="Título..." value={props.title} onChange={e => props.setTitle(e.target.value)} />
            <input type="text" placeholder="Descrição..." value={props.description} onChange={e => props.setDescription(e.target.value)}/>
            <input className="pickImage" type="file" accept="image/*" onChange={props.handleImageChange}/>
            <button className="submitFormButton" onClick={props.createPost}>Criar post</button> 

        </div>
    );

}

export default Form;