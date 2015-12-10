require 'byebug'
class TracksController < ApplicationController
  def index
    @tracks = Track.all
    @tracks.each_with_index {|track, idx| @tracks[idx].roll = JSON.parse(track.roll)}
    render json: @tracks
  end

  def create
    @track = Track.new(track_params)

    @track.roll = params[:track][:roll].to_json
    if @track.save!
      @track.roll = JSON.parse(@track.roll)
      render json: @track
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render json: "it worked"
  end

  private
  def track_params
    params.require('track').permit(:name, :roll)
  end
end
