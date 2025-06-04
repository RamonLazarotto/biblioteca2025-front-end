import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormEditora() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [nome, setNomeUsu] = useState('');
    const [cpf, setCpfUsu] = useState('');
    const [email, setEmailUsu] = useState('');
    const [telefone, setTelefoneUsu] = useState('');
    const [nascimento, setNascimentoUsu] = useState('');
    const [senha, setSenhaUsu] = useState('');
    

    const voltar = () => {
        navegacao('/listausuario');
    };

    const selecionar = async() => {
        let { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
        setNomeUsu(data.nome)
        setCpfUsu(data.cpf)
        setEmailUsu(data.email)
        setTelefoneUsu(data.telefone)
        setNascimentoUsu(data.nascimento)
        setSenhaUsu(data.senha)
        
        
    }

    const alterar = async () => {
        let body = {
            "nome": nome,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "nascimento": nascimento,
            "senha": senha
        };

        await axios.put(`http://localhost:4000/usuario/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nome": nome,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "nascimento": nascimento,
            "senha": senha

        };

        await axios.post(`http://localhost:4000/usuario`, body);
        voltar();
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const excluir = async () => {
        await axios.delete(`http://localhost:4000/usuario/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="usuario" />

            <form>
                {id && (
                    <div className="mb-3">
                        <label className="form-label">
                            Código
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(evento) => setNomeUsu(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                       CPF
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       value={cpf}
                       onChange={(evento) => setCpfUsu(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       value={email}
                       onChange={(evento) => setEmailUsu(evento.target.value)}
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Telefone
                    </label>
                    <input
                        className="form-control"
                        value={telefone}
                        onChange={(evento) => setTelefoneUsu(evento.target.value)}
                    />
                </div>

                <div className="mb-3 position-relative">
                    <label className="form-label">
                        Nascimento
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nascimento}
                        onChange={(evento) => setNascimentoUsu(evento.target.value)}
                    />
                </div>
                
                <div className="mb-3 position-relative">
                    <label className="form-label">
                        Senha
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={senha}
                        onChange={(evento) => setSenhaUsu(evento.target.value)}
                    />
                </div>
                
                <button type="button" className="btn btn-primary"
                    onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => voltar()}>
                    Cancelar
                </button>
                {id && (
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
            </form>
        </>
    );
};