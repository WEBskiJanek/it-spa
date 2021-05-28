import $ from 'jquery';

export const footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return $(`
        <footer>
            <small>Wszelkie prawa zastrzeżone &copy; ${year}</small>
        </footer>
    `);
};
