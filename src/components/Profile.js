import React, { Component } from 'react';

class Profile extends Component{
	render(){
		let artist = {
			name: '',
			followers: {total: ''},
			images: [{url:''},{url:''},{url:''}],
			genres: [],
		};

		artist = this.props.artist !== null ? this.props.artist : artist;

		return (
			<div className="card">
				<h2 className="card-header artist-name">{artist.name}</h2>
				<img
					src={artist.images[0].url}
					alt="Profile"
					className="profile-image img-fluid rounded border-5"
				/>
				<div className="card-block">
					<span className="artist-followers-total">{artist.followers.total} followers</span>
					<div className="Genres">
						<h4>Genres</h4>
						{artist.genres.map(
							(genre, key) => {
								return (
									<span className="badge badge-warning" key={key}>{genre}</span>
								)
							}
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;