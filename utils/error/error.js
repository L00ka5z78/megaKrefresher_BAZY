class ValidationError extends Error { };

const handleError = (err, req, res, next) => {
    // if (err instanceof NotFoundError) {
    //     res.status(404)
    //     .render('error', {
    //         message: 'Can not find element with given ID'
    //     });
    //     return;
    // }
    console.error(err);

    res.status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : "We're sorry, try again later",
        })
}
module.exports = {
    handleError,
    ValidationError
}