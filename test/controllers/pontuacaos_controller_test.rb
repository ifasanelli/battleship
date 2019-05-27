require 'test_helper'

class PontuacaosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pontuacao = pontuacaos(:one)
  end

  test "should get index" do
    get pontuacaos_url
    assert_response :success
  end

  test "should get new" do
    get new_pontuacao_url
    assert_response :success
  end

  test "should create pontuacao" do
    assert_difference('Pontuacao.count') do
      post pontuacaos_url, params: { pontuacao: { pontos: @pontuacao.pontos } }
    end

    assert_redirected_to pontuacao_url(Pontuacao.last)
  end

  test "should show pontuacao" do
    get pontuacao_url(@pontuacao)
    assert_response :success
  end

  test "should get edit" do
    get edit_pontuacao_url(@pontuacao)
    assert_response :success
  end

  test "should update pontuacao" do
    patch pontuacao_url(@pontuacao), params: { pontuacao: { pontos: @pontuacao.pontos } }
    assert_redirected_to pontuacao_url(@pontuacao)
  end

  test "should destroy pontuacao" do
    assert_difference('Pontuacao.count', -1) do
      delete pontuacao_url(@pontuacao)
    end

    assert_redirected_to pontuacaos_url
  end
end
