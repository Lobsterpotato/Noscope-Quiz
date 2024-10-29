import {useForm} from 'react-hook-form';
import {urlBackend} from "../../service/serviceUtils";

const AdminLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const login = async (username, password) => {
        return (await fetch(`${urlBackend}/admin/login/${username}/${password}`)).json()
    }

    const onSubmit = (user) => {
        login(user.username, user.password).then(res => {
            if (res.id !== null) {
                alert("Connexion réussie");
            } else {
                alert('Identifiants incorrects');
            }
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Connexion Admin</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor={"username"}>Username</label>
                                <input type="text" className="form-control"
                                       id="username" {...register("username", {required: true})}/>
                                {errors.username && <span className="text-danger">Ce champs est requis</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor={"password"}>Mot de passe</label>
                                <input type="password" className="form-control" id="password"
                                       {...register("password", {required: true})}/>
                                {errors.password && <span className="text-danger">Ce champs est requis</span>}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="Connexion"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AdminLogin;

