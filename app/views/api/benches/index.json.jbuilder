json.array!(@benches) do |bench|
  json.extract!(
    bench,
    :id, :lat, :lon, :description
  )
end
