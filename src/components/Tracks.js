import React , { Component } from 'react';

class Tracks extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			playingUrl: '',
			audio: null,
			playing: false
		};	
	}

	playAudio(previewUrl){
		let audio = new Audio(previewUrl);

		if( !this.state.playing){
			audio.play();
			this.setState({
				audio: audio,
				playingUrl: previewUrl,
				playing: true
			});
		} else {
			if( this.state.playingUrl === previewUrl ){
				this.state.audio.pause();
				this.setState({
					playing: false,
				});
			} else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					audio: audio,
					playingUrl: previewUrl,
					playing: true
				});
			}
		}
	}

	render(){
		let {tracks} = this.props;
		console.log('Tracks prop:', this.props);
		return(
			<div className="row">
				<div className="card">
					<ul className="list-group list-group-flush">
						{ tracks.map(
							(track,key)=>{
								const trackImage = track.album.images[2].url
								return(
									<li
										className="track-entry list-group-item"
										key={key}
										onClick={this.playAudio.bind(this, track.preview_url)}
									>
										<img
											src={trackImage}
											alt={track.name}
											className="img-fluid"
										/>
										{track.name}
									</li>
								);
							}
						) }
					</ul>
				</div>
			</div>
		);
	}
}

export default Tracks;