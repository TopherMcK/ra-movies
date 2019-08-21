export const ratingImageUtil = {
    getImageForRating(ratingValue) {
        switch (ratingValue) {
            case "G":
                return require('../../assets/rated_g.png')
            case "PG":
                return require('../../assets/rated_pg.png')
            case "PG-13": 
                return require('../../assets/rated_pg13.png')
            case "R":
                return require('../../assets/rated_r.png') 
            default:
                return require('../../assets/logo.png')
        }
    },

    getStarImageWidth(rawImdbRating) {
        return 138 * rawImdbRating.split("/")[0] / 10
    }
}