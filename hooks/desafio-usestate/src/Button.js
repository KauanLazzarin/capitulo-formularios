export default function Button ({onclickfunction, fetchurl, text}) {
    return (
        <button onClick={onclickfunction} fetchurl={fetchurl}>{text}</button>
    );
};