import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";
import {connect} from 'react-redux'
import { handleAddToPlayList } from '../actions';
import {Link} from 'react-router-dom';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addToPlayList: id =>
    dispatch({
      type: "ADD_ITEM_TO_PLAYLIST",
      payload: id
    }),
  addToPlayListThunk: id => dispatch(handleAddToPlayList(id))
});


class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Album: []
    };
  }

  componentDidMount = async () => {
    var headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387"
    });

    var response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/album/" +
      this.props.match.params.id,
      {
        method: "GET",
        headers: headers
      }
    );
    var JSON = await response.json();
    this.setState({
      Album: JSON
    });
    console.log("Album", this.state.Album.tracks);

  };

  componentWillUpdate(){
    localStorage.setItem('PLAYLISTID',JSON.stringify)
  }



  render() {

    return (
      <>
        <div id="AlbumImg" class="row centering">
          <Link to='/Playlist'>CLICK HERE</Link>
          <div class="container mb-3">
            <div class="row no-gutters " id="myContainer">
              {this.state.Album && (
                <div class="col-md-4 p-5" id="img-Container">
                  <Card>
                    <CardImg
                      top
                      className="card-img "
                      src={this.state.Album.cover}
                    />
                    <CardBody>
                      <CardTitle
                        style={{
                          color: "white",
                          fontweight: "bold",
                          fontsize: "x-large"
                        }}
                      >
                        {this.state.Album.title}
                      </CardTitle>
                      <CardSubtitle>{this.state.Album.title}</CardSubtitle>
                      <Button
                        className="btn btn-success text-center"
                        type="button">
                        Play
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              )}
              <div className="col-md-8 p-5"   >
                <div className="row"></div>
                {this.state.Album.tracks &&
                  this.state.Album.tracks.data.map((A, index) =>
                    <div id="track-List1" class="col-md-9">
                      <div key={index}
                        className=" trackHover justify-content-center"
                        style={{ color: "white" }}>
                        <div>
                          <p><b>{A.title}</b></p>
                          <audio controls>
                            <source src={A.preview} type="audio/mpeg" autoPlay controls />
                          </audio>
                          <small style={{ color: "white", float: "right" }}>{A.duration}</small>
                          <Button
                            color="primary"
                            onClick={() => this.props.addToPlayList(A.id)}   
                          >
                           ADD TO PLAYLIST
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);;
