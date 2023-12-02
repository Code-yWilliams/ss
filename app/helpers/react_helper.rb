module ReactHelper
  def react_component(name, props = {}, &block)
    content_tag(:div, nil, data: { component: name, 'react-props' => props.to_json }, &block)
  end
end
