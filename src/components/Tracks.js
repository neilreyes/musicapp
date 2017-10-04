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

		if(!this.state.playing){
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
			<table className="table table-striped table-hover table-bordered">
				<thead className="thead-invers">
					<tr>
						<th></th>
						<th>Track Name</th>
						<th>Album</th>
					</tr>
				</thead>
				<tbody>
					{ tracks.map(
						(track,key)=>{
							const trackImage = track.album.images[2].url
							return(
								<tr
									key={key}
									onClick={this.playAudio.bind(this, track.preview_url)}
								>
									<td>
										<img
											src={trackImage}
											alt={track.name}
											className="img-fluid"
										/>
									</td>
									<td>{track.name}</td>
									<td>{track.album.name}</td>
								</tr>
							);
						}
					) }
				</tbody>
			</table>
		);
	}
}

export default Tracks;