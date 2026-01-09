document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('glossary-search');
    const terms = document.querySelectorAll('dt');
    const definitions = document.querySelectorAll('dd');

    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        terms.forEach((term, index) => {
            const termText = term.textContent.toLowerCase();
            const definitionText = definitions[index].textContent.toLowerCase();

            if (termText.includes(searchTerm) || definitionText.includes(searchTerm)) {
                term.style.display = 'block';
                definitions[index].style.display = 'block';
            } else {
                term.style.display = 'none';
                definitions[index].style.display = 'none';
            }
        });
    });
});