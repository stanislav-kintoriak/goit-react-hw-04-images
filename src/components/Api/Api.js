import PropTypes from 'prop-types'

const API_KEY = '34931962-db4e3cf68e263d5dddbb75168'

export const ApiRequest = (searchText, page) => {
return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
    ).then(response => response.json());


}


ApiRequest.propTypes = {
    searchText:PropTypes.string.isRequired,
    page:PropTypes.number.isRequired
}