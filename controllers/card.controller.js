const Cards = require('../models/db')

module.exports = {
  getCards: (req, res) => {
    const { id, color, expansions } = req.query

    if (id && !color) return res.status(400).json({ error: 'a color must be provided when specifying an id' })

    let result = color ? Cards[`${color}Cards`] : { white: Cards.whiteCards, black: Cards.blackCards }

    if (id && color) {
      result = result[id]
    }

    if (expansions) {
      const filtered = expansions
        .split(',')
        .filter(el => Cards.hasOwnProperty(el))
        .reduce((acc, el) => {
          acc.white.push(...Cards[el].white.map(el => result.white[el]))
          acc.black.push(...Cards[el].black.map(el => result.black[el]))
          return acc
        }, { white: [], black: []})
      if (!filtered.white.length && !filtered.black.length) res.status(400).json({ error: 'specified expansion does not exist' })
      result = filtered
    }

    return res.status(200).json(result)
  }
}
