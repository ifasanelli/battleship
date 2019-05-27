class PontuacaosController < ApplicationController
  before_action :set_pontuacao, only: [:show, :edit, :update, :destroy]

  # GET /pontuacaos
  # GET /pontuacaos.json
  def index
    @pontuacaos = Pontuacao.all
  end

  # GET /pontuacaos/1
  # GET /pontuacaos/1.json
  def show
  end

  # GET /pontuacaos/new
  def new
    @pontuacao = Pontuacao.new
  end

  # GET /pontuacaos/1/edit
  def edit
  end

  # POST /pontuacaos
  # POST /pontuacaos.json
  def create
    @pontuacao = Pontuacao.new(pontuacao_params)

    respond_to do |format|
      if @pontuacao.save
        format.html { redirect_to @pontuacao, notice: 'Pontuacao was successfully created.' }
        format.json { render :show, status: :created, location: @pontuacao }
      else
        format.html { render :new }
        format.json { render json: @pontuacao.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pontuacaos/1
  # PATCH/PUT /pontuacaos/1.json
  def update
    respond_to do |format|
      if @pontuacao.update(pontuacao_params)
        format.html { redirect_to @pontuacao, notice: 'Pontuacao was successfully updated.' }
        format.json { render :show, status: :ok, location: @pontuacao }
      else
        format.html { render :edit }
        format.json { render json: @pontuacao.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pontuacaos/1
  # DELETE /pontuacaos/1.json
  def destroy
    @pontuacao.destroy
    respond_to do |format|
      format.html { redirect_to pontuacaos_url, notice: 'Pontuacao was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pontuacao
      @pontuacao = Pontuacao.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pontuacao_params
      params.require(:pontuacao).permit(:pontos)
    end
end
