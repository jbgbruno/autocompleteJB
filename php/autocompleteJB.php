<?php 
 /**
     * @param $dados Valores em formato de array
     * @param $coluna Coluna para ser mostrada como Descrição de cada item da lista
     */
    function autocompleteEdit($dados, $coluna = null)
    {
        $output = '<div style="max-height: 300px;overflow:auto; border: 1px solid #3c8dbc ;    border-radius:3px;background-color: #FFFFFF"><ul  class=" list-group">';
        if ((count($dados) >= 1) && isset($coluna)) {
            foreach ($dados as $k => $v) {
                $output .= '<li style="padding: 4px" class="list-group-item"';
                foreach ($dados[$k] as $key => $value) {
                    $output .= ' data-' . $key . '="' . $value . '"';
                }
                $output .= '>' . $dados[$k][$coluna] . '</li>';
            }
        } else {
            $output .= '<li style="padding: 4px" class="list-group-item"  >Registro Não Encontrado!</li>';
        }
        $output .= '</ul></div>';

        echo $output;
    }