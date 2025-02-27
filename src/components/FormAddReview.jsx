import axios from "../api/axios";
import { useState } from "react";
import { useParams } from "react-router";

const initialFormData = {
  name: "",
  text: "",
  vote: 0,
};

export default function FormAddReview({ fetchMovie }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        fetchMovie();
      });
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div>
        <label className="inline-block mb-1" htmlFor="name">
          Nome
        </label>
        <br />
        <input
          className="w-96 border border-neutral-200 p-2 rounded-sm"
          id="name"
          name="name"
          type="text"
          placeholder="Inserisci il tuo nome"
          value={formData.name}
          onChange={(e) => handleField("name", e.target.value)}
          required
        />
      </div>
      <div>
        <label className="inline-block mb-1" htmlFor="vote">
          Voto
        </label>
        <br />
        <input
          className="w-96 border border-neutral-200 p-2 rounded-sm"
          id="vote"
          name="vote"
          type="number"
          min={0}
          max={5}
          placeholder="Inserisci il voto"
          value={formData.vote}
          onChange={(e) => handleField("vote", e.target.value)}
        />
      </div>
      <div>
        <label className="inline-block mb-1" htmlFor="text">
          Recensione
        </label>
        <br />
        <textarea
          className="w-96 border border-neutral-200 p-2 rounded-sm"
          id="text"
          name="text"
          placeholder="Inserisci il testo della recensione"
          rows={5}
          value={formData.text}
          onChange={(e) => handleField("text", e.target.value)}
          required
          minLength={5}
        ></textarea>
      </div>
      <button className="bg-emerald-700 p-2 rounded-2xl hover:scale-125 cursor-pointer duration-500">
        Invia
      </button>
    </form>
  );
}
