module.exports = (req, res) => {
    res.send(
        ` <div style="font-size:25px; ">
    <h1>Tour Management API</h1>
    <p>Here are the available Get routes</p>
    <ol>
      <li>GET : <a href="/">Home</a></li>
      <li>GET : <a href="api/v1/tours">All Tour Packages</a></li>
      <li>GET : <a href="api/v1/tour/1">Tour With details</a></li>
      <li>GET : <a href="api/v1/tour/cheapest">Cheapest Tours</a></li>
      <li>GET : <a href="api/v1/tour/trending">Trending Tours</a></li>
    </ol> 
    <p>
    Here are the other available routes in this api
    </p>
    <ul>
        <li>
        POST : /api/v1/tour
        </li>
        <li>
        PATCH : /api/v1/tour/:id
        </li>
        <li>
        PATCH : /api/v1/tour/:id
        </li>
        <li>
        DELETE : /api/v1/tour/:id
        </li>
    </ul>
    </div>
    `
    );
};