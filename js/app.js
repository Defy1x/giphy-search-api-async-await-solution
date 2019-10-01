$(function () {

  // new code with Nathan
  $('#search').submit((event) => {
    const query = $('#query').val()
    console.log(query)

    $('#results-table tbody').html('')
    $('#query').val('')

    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?limit=10&api_key=${process.env.GIPHY_API_KEY}&q=${query}`)
    .then(convertToJson)
    .then(displayResults)
  })
  function convertToJson(response) {
     console.log()
     return response.json()
  }

  function displayResults(convertToJson) {
    console.log(convertToJson)
    convertToJson.data.forEach((gif) => {
      $('#results-table tbody').append(
        `<tr>
          <td>${gif.title}</td>
          <td><img src="${gif.images.fixed_height.url}"></td>
          <td>${gif.rating}</td>
          <td><a href="${gif.url}"> link </a></td>
        </tr>`
      )
    })
  }
})
