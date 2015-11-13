class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save!
    end
  end

  private
    def bench_params
      params.require(:bench).permit(:lat, :lon, :description)
    end
end
