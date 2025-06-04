import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormEditora() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [titulo, setTituloLivro] = useState('');
    const [publicacao, setPublicacaoLivro] = useState('');
    const [paginas, setPaginasLivro] = useState('');
    const [categoria, setCategoriaLivro] = useState('');
    const [editora, setEditoraLivro] = useState('');
    const [edicao, setEdicaoLivro] = useState('');
    const [resumo, setResumoLivro] = useState('');
    

    const voltar = () => {
        navegacao('/listalivro');
    };

    const selecionar = async() => {
        let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
        setTituloLivro(data.titulo)
        setPublicacaoLivro(data.publicacao)
        setPaginasLivro(data.paginas)
        setCategoriaLivro(data.categoria)
        setEditoraLivro(data.editora)
        setEdicaoLivro(data.edicao)
        setResumoLivro(data.resumo)
        
        
    }

    const alterar = async () => {
        let body = {
            "titulo": titulo,
            "publicacao": publicacao,
            "paginas": paginas,
            "categoria": categoria,
            "editora": editora,
            "edicao": edicao,
            "resumo": resumo
        };

        await axios.put(`http://localhost:4000/livro/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "titulo": titulo,
            "publicacao": publicacao,
            "paginas": paginas,
            "categoria": categoria,
            "editora": editora,
            "edicao": edicao,
            "resumo": resumo

        };

        await axios.post(`http://localhost:4000/livro`, body);
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
        await axios.delete(`http://localhost:4000/livro/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="livro" />

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
                        Título do Livro
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={titulo}
                        onChange={(evento) => setTituloLivro(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Ano de Publicação
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       value={publicacao}
                       onChange={(evento) => setPublicacaoLivro(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Páginas
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       value={paginas}
                       onChange={(evento) => setPaginasLivro(evento.target.value)}
                    />

                </div>

                <div className="mb-3 position-relative">
                    <label className="form-label">Categoria</label>
                    <input
                        type="text"
                        className="form-control"
                        value={categoria}
                        onChange={(evento) => setCategoriaLivro(evento.target.value)}
                    />
                </div>
                
                <div className="mb-3 position-relative">
                    <label className="form-label">Editora</label>
                    <input
                        type="text"
                        className="form-control"
                        value={editora}
                        onChange={(evento) => setEditoraLivro(evento.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label">Edição</label>
                    <input
                        type="text"
                        className="form-control"
                        value={edicao}
                        onChange={(evento) => setEdicaoLivro(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea
                        className="form-control"
                        rows={5}
                        value={resumo}
                        onChange={(evento) => setResumoLivro(evento.target.value)}
                    ></textarea>
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